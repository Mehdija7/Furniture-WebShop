import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationHelper } from '../../Shared/Helpers/Authentication';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent {

  currentContent = "home"
  sub: any

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      res => this.currentContent = res['content']
    )
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  selected(item: string) {
    this.currentContent = item
  }

  isAdmin(): boolean {
    return AuthenticationHelper.getLoginInfo().token.user.isAdmin ?? false
  }
}
