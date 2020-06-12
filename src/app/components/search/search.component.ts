import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UrlService } from 'src/app/services/url-service.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  form: FormGroup = new FormGroup({});

  constructor(private fb: FormBuilder,
              private urlService: UrlService) {
    const reg = '(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?';
    this.form = fb.group({
      url: ['', [Validators.required, Validators.pattern(reg)]]
    });
  }

  get f() {
    return this.form.controls;
  }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.form.value.url);
    this.urlService.todo(this.form.value.url);
  }
}
