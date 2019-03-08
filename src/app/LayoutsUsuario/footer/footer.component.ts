import { Component, OnInit } from '@angular/core';
import { SHeaderFooterUsuarioService } from 'src/app/servicios/s-header-footer-usuario.service';
import { Footer } from '../../Interface/header-footer';


@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {


  footer: Footer[];
  

  constructor(private GetFoot: SHeaderFooterUsuarioService) {

    this.GetFoot.GetFooter().subscribe(Footer => {
      this.footer = Footer;
      console.log(this.footer);
    }
    )

  }

  ngOnInit() {


  }


}
