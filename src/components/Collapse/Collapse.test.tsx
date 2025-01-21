import { describe, expect, test, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import Collapse from './Collapse.vue'
import CollapseItem from './CollapseItem.vue'

describe('Collapse.vue', () => {
  test('basic collapse', async () => {
    const onChange = vi.fn()
    const wrapper = mount(
      () => (
        <Collapse modelValue={['a']} onChange={onChange}>
          <CollapseItem name="a" title="title a">
            content a
          </CollapseItem>
          <CollapseItem name="b" title="title b">
            content b
          </CollapseItem>
          <CollapseItem name="c" title="title c" disabled>
            content c
          </CollapseItem>
        </Collapse>
      ),
      {
        global: {
          stubs: ['Icon'],
        },
        attachTo: document.body, // 避免 jsdom getComputedStyle 的 cache
      },
    )
    const headers = wrapper.findAll('.ev-collapse-item__header')
    const contents = wrapper.findAll('.ev-collapse-item__wrapper')

    expect(headers.length).toBe(3)
    expect(contents.length).toBe(3)

    const firstHeader = headers[0]
    const secondHeader = headers[1]
    expect(firstHeader.text()).toBe('title a')

    const firstContent = contents[0]
    const secondContent = contents[1]
    const disabledContent = contents[2]
    expect(firstContent.isVisible()).toBeTruthy()
    expect(secondContent.isVisible()).toBeFalsy()
    expect(firstContent.text()).toBe('content a')

    await firstHeader.trigger('click')
    expect(firstContent.isVisible()).toBeFalsy()
    expect(onChange).toHaveBeenCalledWith([])
    await secondHeader.trigger('click')
    expect(secondContent.isVisible()).toBeTruthy()
    expect(onChange).toHaveBeenLastCalledWith(['b'])

    const disabledHeader = headers[2]
    expect(disabledHeader.classes()).toContain('is-disabled')
    await disabledHeader.trigger('click')
    expect(disabledContent.isVisible()).toBeFalsy()
  })
})
