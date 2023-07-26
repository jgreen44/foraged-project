# Technical Take-home from Foraged

## Instructions

1. CD into `/server` and run:
```shell
yarn
```
then
```shell
yarn dev
```
2. CD into `/client` and run:
```shell
yarn
```
then
```shell
yarn dev
```
---
## The goal:
The goal of this project is to create an application that takes in user typed input, and uses good UX (up to you) to 
display the longest "even" or "odd" streak of letters. Evenness for the letters alternates with a = even, b = odd, 
c = even, d = odd etc.

#### A few gotchas:

1. Whitespace neither counts for a streak, nor breaks a streak
2. Non-alphabetic characters including numbers break a streak
3. Capitalization does not matter
4. Underneath the displayed string, please put the total streak count