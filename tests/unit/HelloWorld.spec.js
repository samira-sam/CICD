import { mount } from '@vue/test-utils';
import HelloWorld from '../../src/components/HelloWorld.vue';

describe('HelloWorld.vue', () => {
  it('afficher le msg', () => {
    const wrapper = mount(HelloWorld, {
      props: {
        msg: 'salut',
      },
    });
    expect(wrapper.text()).toContain('salut');
  });
});
