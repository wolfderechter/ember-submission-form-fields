import { helper } from '@ember/component/helper';

export default helper(function componentForDisplayTypeShow(displayTypeUri) {
  const mapping = {
    'http://lblod.data.gift/display-types/property-group' : 'property-group',
    'http://lblod.data.gift/display-types/defaultInput': `rdf-input-fields/input/show`,
    'http://lblod.data.gift/display-types/textArea': `rdf-input-fields/text-area/show`,
    'http://lblod.data.gift/display-types/date': `rdf-input-fields/date/show`,
    'http://lblod.data.gift/display-types/dateTime': `rdf-input-fields/date-time/show`,
    'http://lblod.data.gift/display-types/files': `rdf-input-fields/files/show`,
    'http://lblod.data.gift/display-types/remoteUrls': `rdf-input-fields/remote-urls/show`,
    'http://lblod.data.gift/display-types/conceptSchemeSelector': `rdf-input-fields/concept-scheme-selector/show`,
    'http://lblod.data.gift/display-types/vLabelOpcentiem': `rdf-input-fields/vlabel-opcentiem/show`,
    'http://lblod.data.gift/display-types/switch': `rdf-input-fields/switch/show`,
    'http://lblod.data.gift/display-types/conceptSchemeMultiSelector': `rdf-input-fields/concept-scheme-multi-selector/show`,
    'http://lblod.data.gift/display-types/dateRange': `rdf-input-fields/date-range/show`,
    'http://lblod.data.gift/display-types/search': `rdf-input-fields/search/show`,
    'http://lblod.data.gift/display-types/customSearch': `search-panel-fields/search/show`,
    'http://lblod.data.gift/display-types/bestuursorgaanSelector': `custom-submission-form-fields/bestuursorgaan-selector/show`,

  };

  return mapping[displayTypeUri] || '';
});
