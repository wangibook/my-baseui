
<script>
import { h } from 'vue';

export default {
  props: {
    data: {
      required: true
    },
    renderContent: Function,
    parentData: Array
  },
  setup(props) {
    const { data, renderContent, parentData } = props;
    return () => [
      renderContent ? renderContent(h, { data, parentData }) : h('span', data.label)
    ]
  }
}
</script>


