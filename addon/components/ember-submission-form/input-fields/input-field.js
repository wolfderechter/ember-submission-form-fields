import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { validationResultsForField, validationTypesForField } from '../../../utils/import-triples-for-form';

/**
 * Abstract input-field component providing a base class
 * for the custom input-fields
*/
export default class InputFieldComponent extends Component {
  @tracked validations = []

  @tracked hasBeenModified = false

  get canShowErrors() {
    return this.hasBeenModified || this.args.forceShowErrors;
  }

  get errors() {
    if (this.canShowErrors)
      return this.validations.filter(r => !r.valid);
    else
      return [];
  }

  get isValid() {
    return this.validations.filter(r => !r.valid).length == 0;
  }

  get isRequired() {
    const validationTypes = validationTypesForField(this.args.field.uri, this.storeOptions);
    return validationTypes.any(v => v.value == 'http://lblod.data.gift/vocabularies/forms/RequiredConstraint');
  }

  get storeOptions() {
    return {
      formGraph: this.args.graphs.formGraph,
      sourceGraph: this.args.graphs.sourceGraph,
      metaGraph: this.args.graphs.metaGraph,
      sourceNode: this.args.sourceNode,
      store: this.args.formStore,
      path: this.args.field.rdflibPath
    };
  }

  loadData() {
    this.loadValidations();
  }

  @action
  loadValidations() {
    this.validations = validationResultsForField(this.args.field.uri, this.storeOptions);
  }
}
