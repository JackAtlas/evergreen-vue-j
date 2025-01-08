import { describe, test, expect, vi, beforeEach } from 'vitest'
import { mount } from '@vue/test-utils'
import Tooltip from './Tooltip.vue'

const onVisibleChange = vi.fn()

describe('Tooltip.vue', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })
  test('basic tooltip', async () => {
    const wrapper = mount(
      () => (
        <Tooltip content="hello tooltip" trigger="click" onVisibleChange={onVisibleChange}>
          <button id="trigger">Trigger</button>
        </Tooltip>
      ),
      { attachTo: document.body },
    )

    const triggerArea = wrapper.find('#trigger')
    expect(triggerArea.exists()).toBeTruthy()
    expect(wrapper.find('.ev-tooltip__popper').exists()).toBeFalsy()

    triggerArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.ev-tooltip__popper').exists()).toBeTruthy()
    expect(wrapper.get('.ev-tooltip__popper').text()).toBe('hello tooltip')
    expect(onVisibleChange).toHaveBeenCalledWith(true)
    triggerArea.trigger('click')
    await vi.runAllTimers()
    expect(wrapper.find('.ev-tooltip__popper').exists()).toBeFalsy()
    expect(onVisibleChange).toHaveBeenLastCalledWith(false)
  })
})
