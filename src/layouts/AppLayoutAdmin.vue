<script setup>
import MenuDropdown from '@/components/navigation/MenuDropdown.vue';
import CodePopup from "@/components/popups/CodePopup.vue";
import {useCodePopupStore} from "@/stores/CodePopupStore";
import {storeToRefs} from "pinia";

const code_store = useCodePopupStore();
const {is_visible_popup, use_value, use_code} = storeToRefs(code_store);


</script>

<template>
  <main class="app-layout-default-main p-2 bg-amber-50">
    <div class="admin">
      <div class="admin__sidebar">
        <h2 class="admin__title">
          <RouterLink to="/">Home</RouterLink>
        </h2>
        <h2 class="admin__title">
          <RouterLink to="/admin">Admin</RouterLink>
        </h2>
        <MenuDropdown
            label="Forms"
            icon="fa-user-secret"
            :items="[
						{ title: 'Icons', url: '/ui/icons' },
						{ title: 'Buttons', url: '/ui/buttons' },
						{ title: 'Checkbox', url: '/ui/checkbox' },
						{ title: 'Radio', url: '/ui/radio' },
						{ title: 'Input', url: '/ui/input' },
						{ title: 'Select', url: '/ui/select' },
						{ title: 'Forms', url: '/ui/forms' },
					]"
        />
      </div>
      <div class="admin__main">
        <slot/>
      </div>
    </div>
    <CodePopup v-if="is_visible_popup" :use="use_value" :code="use_code"/>
  </main>
</template>
<style lang="scss" scoped>
.admin {
  display: flex;
  justify-content: space-between;
  min-height: 100vh;
  &__sidebar {
    padding: 3rem 2rem;
    width: 16%;
    color: white;
    background: #444;
  }
  &__main {
    flex: 1;
    padding: 3rem 2rem;
    background: #f1f1f1;
  }
  &__title {
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    border-bottom: 1px solid #666;
  }
}
</style>
