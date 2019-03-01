import "react-native";
import * as React from "react";
import * as renderer from 'react-test-renderer';
import JobOffersScreenComponent from '../../../App/Components/JobOffersScreen/JobOffersScreenComponent'

test("Renders Correctly", () => {
const tree = renderer.create(<JobOffersScreenComponent/>).toJSON();
expect(tree).toMatchSnapshot();
});
