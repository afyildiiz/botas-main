import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Order } from 'src/app/models/order';
import { ConnectDbService } from 'src/app/services/connect-db.service';
import jspdf, {jsPDF} from 'jspdf';


declare var require: any;


// import html2canvas from 'html2canvas';
import 'jspdf-autotable';
import html2canvas from "html2canvas";
import 'jspdf-autotable';

@Component({
  selector: 'app-download-pdf',
  templateUrl: './download-pdf.component.html',
  styleUrls: ['./download-pdf.component.scss']
})
export class DownloadPdfComponent implements OnInit {
  name="fatih"
  orderArray: Order[] = [];
  
  displayedColumns: string[] = [
    'tedarikci_adi',
    'kiyafet_adi',
    'adet',
    'beden',
    'siparis_tarihi',
    'sezon',
    'ozellik',
    'birim',
    'fiyat',
    'para_birimi',
    'kur',
    'tl_fiyat',
  ];
  dataSource = new MatTableDataSource<Order>(this.orderArray);  
  @ViewChild('content', {static: true}) content!: ElementRef;
  @ViewChild('content') invoiceElement!: ElementRef;
  @ViewChild('pdfTable')

  pdfTable!: ElementRef;

  constructor(public dialog: MatDialog,
    private fb: FormBuilder,
    private router: Router,
    private ngbmodal: NgbModal,
    private connectService: ConnectDbService) { }

    @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngOnInit(): void {
    this.readOrder()
  }
  readOrder() {
    this.connectService.getOrder().subscribe((res) => {
      this.orderArray = res;
      this.dataSource = new MatTableDataSource<Order>(this.orderArray);
      this.dataSource.paginator = this.paginator;

      console.log(this.orderArray);
    });
  }

  public generatePDF(): void {

    html2canvas(this.invoiceElement.nativeElement, { scale: 3 }).then((canvas) => {
      const imageGeneratedFromTemplate = canvas.toDataURL('image/png');
      const fileWidth = 210;
      const generatedImageHeight = (canvas.height * fileWidth) / canvas.width;
      let PDF = new jsPDF('p', 'mm', 'a4',);
      PDF.addImage(imageGeneratedFromTemplate, 'PNG', 0, 5, fileWidth, generatedImageHeight,);
      PDF.html(this.invoiceElement.nativeElement.innerHTML)
      PDF.save('angular-invoice-pdf-demo.pdf');
    });
  }
  

    

    }
    





