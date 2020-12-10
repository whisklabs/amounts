<!-- TOC -->

- [Whisk formatter library for amounts](#whisk-formatter-library-for-amounts)
  - [Description](#description)
  - [Install](#install)
  - [Usage](#usage)
  - [Methods](#methods)
    - [Format values](#format-values)
    - [Capitalize some unit (tbs, tbsp)](#capitalize-some-unit-tbs-tbsp)
    - [Format with unit](#format-with-unit)
    - [Get UTF-8 fraction](#get-utf-8-fraction)
    - [Round numbers](#round-numbers)
    - [Get round of fraction](#get-round-of-fraction)
    - [Check unit fraction](#check-unit-fraction)
    - [Check unit capitalize](#check-unit-capitalize)
    - [Check unit white space](#check-unit-white-space)
  - [Constants](#constants)
    - [Fractions](#fractions)
    - [Units](#units)

<!-- /TOC -->

<!-- https://marketplace.visualstudio.com/items?itemName=xavierguarch.auto-markdown-toc -->

# Whisk formatter library for amounts

## Description

Functions for beautify amount of food.

## Install

```bash
npm i @whisklabs/amounts
```

## Usage

```ts
import { formatQuantity } from '@whisklabs/amounts';

formatQuantity(100);
```

## Methods

### Format values

```ts
const formatQuantity: (quantity: number, unit?: string | undefined) => string;

formatQuantity(12.12, 'tsp') === '12 ⅛';
```

### Capitalize some unit (tbs, tbsp)

```ts
const formatUnit: (unit: string) => string;

formatUnit('grms') = 'grms';
formatUnit('tbsp') = 'Tbsp';
```

### Format with unit

```ts
const formatQtyUnit: (item: { quantity?: number; unit?: string }) => string;

formatQtyUnit({ quantity: 1123.5, unit: 'tsp' }) === '1123 ½ tsp';
```

### Get UTF-8 fraction

```ts
const formatFraction: (fraction: string) => string;

formatFraction('1/2') === '½';
```

### Round numbers

```ts
const dropZeros: (value: number, decimalPoints?: number) => number;

dropZeros(1.014634, 3) === '1.015';
```

### Get round of fraction

```ts
const getFractions: (value: number) => [number, number, number] | undefined;

getFractions(10.33333333) === [10, 1, 3];
```

### Check unit fraction

```ts
const isFractionalUnit: (unit: string) => boolean;

isFractionalUnit('kg') === false;
isFractionalUnit('tablespoon') === true;
```

### Check unit capitalize

```ts
const isCapitalizableUnit: (unit: string) => boolean;

isCapitalizableUnit('kg') === false;
isCapitalizableUnit('tbs') === true;
```

### Check unit white space

```ts
const isWithoutSpaceUnit: (unit: string) => boolean;

isWithoutSpaceUnit('grms') === false;
isWithoutSpaceUnit('ml') === true;
```

## Constants

### Fractions

For convert '1/2' -> '½'

```ts
const fractions: {
  [key: string]: string;
};
```

### Units

kg, ml, ...

```ts
const units: Partial<{
  [unit: string]: {
    fractional?: true;
    withoutSpace?: true;
    capitalizable?: true;
  };
}>;
```
