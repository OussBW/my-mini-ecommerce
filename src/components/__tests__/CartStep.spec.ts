import { describe, it, expect, vi } from "vitest";

import { mount } from "@vue/test-utils";
import { createTestingPinia } from "@pinia/testing";
import { useCartStore } from "@/stores/cart";
import CartStep from "@/components/organisms/CartStep.vue";

describe("Cart step test", () => {
  it("renders properly", () => {
    const wrapper = mount(CartStep, {
      global: {
        plugins: [createTestingPinia({ createSpy: vi.fn })],
      },
    });
    const cartStrore = useCartStore();
    cartStrore.cart = [];
    expect(wrapper.find("[data-test-id=emptyCart]").text()).toContain("click");
  });
});
