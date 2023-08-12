# POC with Tokens Studio for Figma

[Token Studio](https://tokens.studio/)


[Token Studio with Style Dictionary](https://docs.tokens.studio/pt-br/transforming/style-dictionary)
[@tokens-studio/sd-transforms](https://www.npmjs.com/package/@tokens-studio/sd-transforms)

[Example config with @tokens-studio/sd-transforms and Style Dictionary](https://configurator.tokens.studio/)

Following the docs and examples about the Tokens Figma for Studio, doesn´t work =(.
Try to run `node build-tokens.js` I got a error, 
`TypeError: Failed to load or parse JSON or JS Object: Cannot destructure property 'type' of 'token' as it is null.`
This error throw at this line `/node_modules/@tokens-studio/sd-transforms/dist/parsers/expand-composites.js:66`

The only way I could get it to work, but not how I wanted it, was to follow these steps [steps](https://www.codemotion.com/magazine/frontend/design-ux/design-tokens-and-cross-platform-coherence-part-3/)
Check this [branch](https://github.com/TiagoBehenck/poc-token-studio-figma/tree/follow-tutorial-codemotion) to see functional output.

In the future, I will make something like this awesome example in [Medium](https://didoo.medium.com/how-to-manage-your-design-tokens-with-style-dictionary-98c795b938aa).