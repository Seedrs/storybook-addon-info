# storybook-addon-info

[![npm version](https://badge.fury.io/js/%40seedrs%2Fstorybook-addon-info.svg)](https://badge.fury.io/js/%40seedrs%2Fstorybook-addon-info) [![Build status](https://badge.buildkite.com/4e6b0592e026ecec842d7f51d66f16bc8ff10b4dce2c86daeb.svg)](https://buildkite.com/seedrs/storybook-addon-info) [![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

This package will show additional information for your stories in Storybook. Useful when you want to display usage or other types of documentation alongside your story.

## Installation

```bash
# With yarn (preferred)
yarn add @seedrs/storybook-addon-info
```

```bash
# With NPM
npm i @seedrs/storybook-addon-info --save
```

## Basic usage

Wrap your story with the named export `withInfo`, which is a function that takes either documentation text (as markdown if required) or an options object.

```javascript
// ...
import { withInfo } from '@storybook/addon-info';
import README from '../README.md';

const stories = storiesOf('ExampleComponent', module);

stories.add('Baic information', withInfo(README)(() => (
  <ExampleComponent />
)));
```

By default This will create a collapsed panel at the beggining of the story with the heading "Getting started". The panel will open and close by clicking the heading.

## Usage with options

For more configuration `withInfo` can also take an options object.

```javascript
// ...
import { withInfo } from '@storybook/addon-info';
import README from '../README.md';

const stories = storiesOf('ExampleComponent', module);

stories.add('Baic information', withInfo({
  beforeDocumentation: {
    heading: 'Installation',
    documentation: README,
    isClosed: false
  }
})(() => (
  <ExampleComponent />
)));
```

In this example a panel will be added at the beggining of the story with the heading "Installation" and the pannel will be open.

Note that the key for this is `beforeDocumentation`. There is also an option for `afterDocumentation` which will render after the story.

## PropTypes

By default using withInfo will show a prop table for all the components within your story. If you would like to specify which prop tables should be rendered you can configure this as shown in the example below.

```javascript
import { withInfo } from '@storybook/addon-info';
import README from '../README.md';

const stories = storiesOf('ExampleComponent', module);

stories.add('Baic information', withInfo({
  propTypes: [ExampleComponent],
  beforeDocumentation: {
    documentation: README
  }
})(() => (
  <LayoutComponent>
    <ExampleComponent />
  </LayoutComponent>
)));
```

## Options

The configurable options for `withInfo` are shown below:

```javascript
{
  propTypes: [], // Defines the prop tables to display in the story. (Default: shows all the components used in the story)
  beforeDocumentation: {
    heading: '', // The heading to display in the panel (Default: 'Getting started'),
    documentation: '', // The text to display from string or markdown
    isClosed: false // Defined if the panel should be open or closed (Default: true)
  },
  beforeDocumentation: {
    heading: '',
    documentation: '',
    isClosed: false
  }
}
```

## Usage with styled-components

If you are using `styled-components` you will notice that the names of the components may not display correctly within the story. To fix this you will need to add a displayName for your styled components.

```javascript
import styled from 'styled-components';

const ExampleComponent = styled.div`
  // ...
`;

ExampleComponent.displayName = 'ExampleComponent';
```
