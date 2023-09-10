import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  constructor(private Router:Router, private ActivatedRoute:ActivatedRoute) {    
  }
ngOnInit():void
{
  
  this.ActivatedRoute.paramMap.subscribe((params)=>{
    this.Search(params.get("SearchedTitle"))
  })
}
ngOnChanges():void
{
}
Search(SearchedTitle:string|null):void
{
  if(SearchedTitle)
  {

  
  this.Router.navigate(['/products',SearchedTitle])
}
}
}
