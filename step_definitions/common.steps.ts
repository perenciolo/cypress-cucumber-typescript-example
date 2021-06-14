import { When } from 'cypress-cucumber-preprocessor/steps';
import { visitUri } from '../page_objects/common.page';

When(/^I visit the "([^\"]+)" uri$/, (uri: string) => {
  visitUri(uri);
});
