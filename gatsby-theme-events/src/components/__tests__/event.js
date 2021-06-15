import React from "react"
import renderer from "react-test-renderer"

import Evet from "../event"

describe("Evet", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<Evet siteTitle="Default Starter" />)
      .toJSON()
    expect(tree).toMatchSnapshot()
  })
})