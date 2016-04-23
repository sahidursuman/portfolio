import React from 'react';
import { renderComponent, expect } from '../../../test_helper';
import ItemHeadingForm from '../../../../../../src/cms/components/items/forms/heading';

describe('ItemHeadingForm', () => {

    let component;
  
    it('shows Create Button when item is new', () => {
        const props = { type: 'ItemHeading', isNew: true };
        component = renderComponent(ItemHeadingForm, props, {});
        expect(component.find('button')).to.have.text('Create');
        component.find('input[name=title]').simulate('change', 'hoge');
        expect(component.find('input[name=title]')).to.have.value('hoge')
    });
    
    it('shows alert when text is nil', () => {
        const props = { type: 'ItemHeading', isNew: true };
        component = renderComponent(ItemHeadingForm, props, {});
        component.find('input[name=title]').simulate('change', null);
        console.log(component.find('.item-form__input-text'));
        expect(component.find('.item-form__input-text')).to.contain('Enter heading')
    });

    it('shows Update Button when item is persisted', () => {
        const props = { type: 'ItemHeading', isNew: false, initialValues: { title: 'hoge' } };
        component = renderComponent(ItemHeadingForm, props, {});
        expect(component.find('button')).to.have.text('Update');
        expect(component.find('input[name=title]')).to.have.value('hoge');
    });

});