import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';

import { JhcognitoappTestModule } from '../../../../test.module';
import { ProductCategoryComponent } from 'app/entities/microb/product-category/product-category.component';
import { ProductCategoryService } from 'app/entities/microb/product-category/product-category.service';
import { ProductCategory } from 'app/shared/model/microb/product-category.model';

describe('Component Tests', () => {
  describe('ProductCategory Management Component', () => {
    let comp: ProductCategoryComponent;
    let fixture: ComponentFixture<ProductCategoryComponent>;
    let service: ProductCategoryService;

    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [JhcognitoappTestModule],
        declarations: [ProductCategoryComponent],
      })
        .overrideTemplate(ProductCategoryComponent, '')
        .compileComponents();

      fixture = TestBed.createComponent(ProductCategoryComponent);
      comp = fixture.componentInstance;
      service = fixture.debugElement.injector.get(ProductCategoryService);
    });

    it('Should call load all on init', () => {
      // GIVEN
      const headers = new HttpHeaders().append('link', 'link;link');
      spyOn(service, 'query').and.returnValue(
        of(
          new HttpResponse({
            body: [new ProductCategory(123)],
            headers,
          })
        )
      );

      // WHEN
      comp.ngOnInit();

      // THEN
      expect(service.query).toHaveBeenCalled();
      expect(comp.productCategories && comp.productCategories[0]).toEqual(jasmine.objectContaining({ id: 123 }));
    });
  });
});
