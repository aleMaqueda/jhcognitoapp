import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';
import { of } from 'rxjs';

import { JhcognitoappTestModule } from '../../../../test.module';
import { ProductCategoryDetailComponent } from 'app/entities/microb/product-category/product-category-detail.component';
import { ProductCategory } from 'app/shared/model/microb/product-category.model';

describe('Component Tests', () => {
  describe('ProductCategory Management Detail Component', () => {
    let comp: ProductCategoryDetailComponent;
    let fixture: ComponentFixture<ProductCategoryDetailComponent>;
    const route = ({ data: of({ productCategory: new ProductCategory(123) }) } as any) as ActivatedRoute;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhcognitoappTestModule],
        declarations: [ProductCategoryDetailComponent],
        providers: [{ provide: ActivatedRoute, useValue: route }],
      })
        .overrideTemplate(ProductCategoryDetailComponent, '')
        .compileComponents();
      fixture = TestBed.createComponent(ProductCategoryDetailComponent);
      comp = fixture.componentInstance;
    });

    describe('OnInit', () => {
      it('Should load productCategory on init', () => {
        // WHEN
        comp.ngOnInit();

        // THEN
        expect(comp.productCategory).toEqual(jasmine.objectContaining({ id: 123 }));
      });
    });
  });
});
