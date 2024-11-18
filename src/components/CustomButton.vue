<template>
  <button
      class="h-[54px] w-full rounded-full flex justify-center items-center bg-[#00205c] hover:border-[#00205c] hover:border-2 hover:bg-[#FADC6F] group transition-all duration-200"
      :disabled="isLoading"
      @click="handleClick"
  >
    <p class="text-white group-hover:text-main">
      {{ buttonText }}
    </p>
  </button>
</template>

<script>
export default {
  name: 'CustomButton',
  props: {
    value: {
      type: String,
      default: '' // Default button text
    }
  },
  data() {
    return {
      isLoading: false, // Loading state
      buttonText: this.value // Initialize with the prop value
    };
  },
  watch: {
    value(newValue) {
      this.buttonText = newValue; // Update text when prop changes
    }
  },
  methods: {
    async handleClick() {
      this.isLoading = true;
      this.buttonText = 'Loading...'; // Change text to "Loading..."

      // Simulate an asynchronous operation (e.g., API call)
      await new Promise(resolve => setTimeout(resolve, 2000));

      this.$emit('clickCallback'); // Emit the event to the parent
      this.isLoading = false; // Reset loading state
      this.buttonText = this.value; // Reset text
    }
  }
};
</script>

<style scoped>
/* Add any additional styles here */
</style>
