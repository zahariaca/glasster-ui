import { Component } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { FormModalComponent } from './components/form-modal/form-modal.component'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'glasster-ui';

  constructor(private modalService: NgbModal) { }

  openFormModal() {
    const modalRef = this.modalService.open(FormModalComponent);
    modalRef.componentInstance.id = 10; // should be the id
  
    modalRef.result.then((result) => {
      console.log(result);
    }).catch((error) => {
      console.log(error);
    });
  }
}
