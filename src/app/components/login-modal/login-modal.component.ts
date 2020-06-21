import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from 'src/app/services/authentication.service';


@Component({
  selector: 'app-login-modal',
  templateUrl: './login-modal.component.html',
  styleUrls: ['./login-modal.component.css']
})
export class LoginModalComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;
  public invalidLogin = false

  constructor(public activeModal: NgbActiveModal,
    private formBuilder: FormBuilder,
    private authService: AuthenticationService) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: 'user',
      password: 'a'
    });
  }

  submitForm() {
    this.authService.authenticate(this.myForm.value.username, this.myForm.value.password).subscribe(
      data => {
        console.log(`++submitForm data: ${JSON.stringify(data)}`)
        this.invalidLogin = false;
        this.activeModal.close(this.myForm.value);
      },
      error => {
        console.log(`++submitForm error: ${JSON.stringify(error)}`)
        this.invalidLogin = true;
      }
    )
  }
}
