import { onMounted, onUnmounted } from "vue";

export function useLifecycleLogger(payload) {
  onMounted(() => {
    //eslint-disable-next-line no-console
    console.log(payload.name, "mounted");
  });

  onUnmounted(() => {
    //eslint-disable-next-line no-console
    console.log(payload.name, "unmounted");
  });
}
