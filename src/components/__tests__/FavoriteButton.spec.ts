import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import FavoriteButton from "@/components/atoms/FavoriteButton.vue";

describe("Favorite button test", () => {
  it("renders properly", () => {
    const wrapper = mount(FavoriteButton);
    expect(wrapper.find("span").classes("pi-heart")).toBe(true);
  });
});
