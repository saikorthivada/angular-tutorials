import { inject } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { Router } from "@angular/router";
import { ConfirmationService } from "../componentsAsService/confirmation/confirmation.service";
import { ToastService } from "../componentsAsService/toast/toast.service";

export class BaseClass {
  public toastService = inject(ToastService);
  public router = inject(Router);
  public confirmationService = inject(ConfirmationService);
  public formBuilder = inject(FormBuilder);
}
