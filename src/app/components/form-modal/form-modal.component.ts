import { Component, OnInit, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';


@Component({
  selector: 'app-form-modal',
  templateUrl: './form-modal.component.html',
  styleUrls: ['./form-modal.component.css']
})
export class FormModalComponent implements OnInit {
  @Input() id: number;
  myForm: FormGroup;

  constructor(public activeModal: NgbActiveModal,
              private formBuilder: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
  }

  closeModal() {
    this.activeModal.close('Modal Closed');
  }

  private createForm() {
    this.myForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  submitForm() {
    this.activeModal.close(this.myForm.value);
  }
}
