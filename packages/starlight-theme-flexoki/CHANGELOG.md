# starlight-theme-flexoki

## 0.2.0

### Minor Changes

- [#8](https://github.com/delucis/starlight-theme-flexoki/pull/8) [`c92d8af`](https://github.com/delucis/starlight-theme-flexoki/commit/c92d8af97b990b81fcfcb410f64a9f61be60e80c) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** The minimum supported version of Starlight is now version `0.34.0`.

  Please use the `@astrojs/upgrade` command to upgrade your project:

  ```sh
  npx @astrojs/upgrade
  ```

- [#8](https://github.com/delucis/starlight-theme-flexoki/pull/8) [`c92d8af`](https://github.com/delucis/starlight-theme-flexoki/commit/c92d8af97b990b81fcfcb410f64a9f61be60e80c) Thanks [@trueberryless](https://github.com/trueberryless)! - ⚠️ **BREAKING CHANGE:** Ensures that the `<Badge>` and `<Icon>` components no longer render with a trailing space.

  Read more about this change in the [Starlight 0.33.0 release notes](https://github.com/withastro/starlight/releases/tag/@astrojs/starlight@0.33.0)

- [#8](https://github.com/delucis/starlight-theme-flexoki/pull/8) [`c92d8af`](https://github.com/delucis/starlight-theme-flexoki/commit/c92d8af97b990b81fcfcb410f64a9f61be60e80c) Thanks [@trueberryless](https://github.com/trueberryless)! - Groups all of the Starlight Flexoki theme CSS declarations into a single `flexoki` [cascade layer](https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Cascade_layers).

  This change aligns with the Starlight CSS architecture and allows for easier customization of the Starlight Flexoki theme CSS as any custom unlayered CSS will override the default styles. If you are using cascade layers in your custom CSS, you can use the [`@layer`](https://developer.mozilla.org/en-US/docs/Web/CSS/@layer) CSS at-rule to define the order of precedence for different layers including the ones used by Starlight and the Starlight Flexoki theme.

  Make sure to check your site’s appearance when upgrading to make sure there are no style regressions caused by this change.

## 0.1.0

### Minor Changes

- [`67036ed`](https://github.com/delucis/starlight-theme-flexoki/commit/67036ed8ecf18e62411a8c519e1f9e9aa6ed8a07) Thanks [@delucis](https://github.com/delucis)! - The minimum supported version of Starlight is now v0.32

### Patch Changes

- [`f6689c6`](https://github.com/delucis/starlight-theme-flexoki/commit/f6689c63585853eca4d6b2f05f564836d0f5b65c) Thanks [@delucis](https://github.com/delucis)! - Fixes a styling bug impacting badges displayed in the sidebar

- [`8575568`](https://github.com/delucis/starlight-theme-flexoki/commit/8575568274a7c91f4bb7057358bf902186748d41) Thanks [@delucis](https://github.com/delucis)! - Refactors pagination styles to use an override instead of custom CSS. This fixes the top border of the pagination component displaying on pages without `prev` and `next` links.

## 0.0.4

### Patch Changes

- [`8f38a23`](https://github.com/delucis/starlight-theme-flexoki/commit/8f38a2343dc62ba0cd7fa84224033b471633b8e6) Thanks [@delucis](https://github.com/delucis)! - Adds styles for Starlight’s banner component

- [`5c1df07`](https://github.com/delucis/starlight-theme-flexoki/commit/5c1df0770c646faf004c18c95c8eec4a92a6b583) Thanks [@delucis](https://github.com/delucis)! - Adds custom styles for the `<LinkCard>` component

- [`c746a23`](https://github.com/delucis/starlight-theme-flexoki/commit/c746a239f6b93d4b3098cdae3a6958db7269470a) Thanks [@delucis](https://github.com/delucis)! - Makes asides slightly more vibrant to help them stand out

## 0.0.3

### Patch Changes

- [`e1730ee`](https://github.com/delucis/starlight-theme-flexoki/commit/e1730ee89740ca433f07cfb4b529679f5ac1ea9c) Thanks [@delucis](https://github.com/delucis)! - Improves main navigation sidebar styles

- [`69e1c38`](https://github.com/delucis/starlight-theme-flexoki/commit/69e1c382a8225847ce168d5aff03657dee3e5609) Thanks [@delucis](https://github.com/delucis)! - Adds support for switching between accent colors

- [`74c9c0f`](https://github.com/delucis/starlight-theme-flexoki/commit/74c9c0fbc77224db059f6bb87d5396c85cf1ac11) Thanks [@delucis](https://github.com/delucis)! - Improves search modal styles

- [`26695df`](https://github.com/delucis/starlight-theme-flexoki/commit/26695df1f869f739ab564a26a488b355dee38c6c) Thanks [@delucis](https://github.com/delucis)! - Makes text in page footer (edit links, last-updated date) slightly smaller

- [`9bea76b`](https://github.com/delucis/starlight-theme-flexoki/commit/9bea76be60319ebed107ced22e9b9fd4760aa709) Thanks [@delucis](https://github.com/delucis)! - Adds slightly more spacing between list items with rich content

## 0.0.2

### Patch Changes

- [`e559925`](https://github.com/delucis/starlight-theme-flexoki/commit/e559925f619578f551c616d25dc58363cac4b41b) Thanks [@delucis](https://github.com/delucis)! - Fixes component style specificity

- [`b800f85`](https://github.com/delucis/starlight-theme-flexoki/commit/b800f85b0c67edf73850f327c5474504f2e6f781) Thanks [@delucis](https://github.com/delucis)! - Improves README & package metadata

- [`b0849bd`](https://github.com/delucis/starlight-theme-flexoki/commit/b0849bdd7b2bb09ff1b64b32da39bac1a421b273) Thanks [@delucis](https://github.com/delucis)! - Fixes code block font size

- [`3a7a41a`](https://github.com/delucis/starlight-theme-flexoki/commit/3a7a41afad43e8dd1303a2d980eddccfefeb565d) Thanks [@delucis](https://github.com/delucis)! - Fixes an issue styling `<script>` tags in `<Steps>`

## 0.0.1

### Patch Changes

- [`455332e`](https://github.com/delucis/starlight-theme-flexoki/commit/455332e880423bfa124d764c220f17befa441aff) Thanks [@delucis](https://github.com/delucis)! - Initial (buggy) release
