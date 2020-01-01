<template>
  <el-dialog title="提示" :visible.sync="modalOpen" width="30%" :before-close="closeModal">
    <span slot="footer" class="dialog-footer">footer</span>
  </el-dialog>
</template>

<script>
export default {
  name: "calendarModal",
  props: {
    modalOpen: { type: Boolean, required: true }
  },
  methods: {
    closeModal() {
      this.$emit("close-modal");
    }
  }
};
</script>

<style lang="scss" scoped>
</style>