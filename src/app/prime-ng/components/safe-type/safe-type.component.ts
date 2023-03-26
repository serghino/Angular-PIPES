import { Component, OnInit } from '@angular/core';
import { FormBuilder, NonNullableFormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-safe-type',
  templateUrl: './safe-type.component.html',
  styleUrls: ['./safe-type.component.css']
})
export class SafeTypeComponent implements OnInit {
  // forms infer types from group.
  addressForm = this.fb.group({
    street: ['', Validators.required],
    city: ['', Validators.required],
    isLate: [false, Validators.required],
  });
  
  userForm = {
    email: ["", [Validators.email]],
    password: ["", [Validators.required, Validators.minLength(8)]],
    phone: [0, [Validators.required, Validators.pattern(/^\d{10}$/)]],
    address: this.addressForm
  };

  form = this.fb.group(this.userForm);

  constructor(private fb: NonNullableFormBuilder) { }

  ngOnInit(): void {
    const data = this.form.controls.address.value.city;
    console.log((data));
  }

}
