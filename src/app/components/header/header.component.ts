import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';
import { LoginModalComponent } from '../login-modal/login-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  invalidLogin = false;

  constructor(private modalService: NgbModal,
    private authService: AuthenticationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  openLoginModal() {
    const modalRef = this.modalService.open(LoginModalComponent);
    modalRef.componentInstance.id = 10; // should be the id

    modalRef.result.then((result) => {
      this.router.navigate(['']);
    }).catch((error) => {
      this.router.navigate(['']);
    });
  }

  isAuthenticated() {
    return this.authService.isUserLoggedIn();
  }

  logout() {
    this.authService.logOut();
    this.router.navigate(['']);
  }
}
