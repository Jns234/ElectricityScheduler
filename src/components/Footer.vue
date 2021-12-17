<script setup lang="ts">
    const { t } = useI18n()
</script>

<template>
    <div class="flex flex-col">
        <div class="flex flex-row justify-center align-center opacity-75 text-center">
            <router-link class="mr-12" to="/privacy" :title="t('button.home')">
                <span>Privacy Policy</span>
            </router-link>
            <router-link class="" to="/terms" :title="t('button.home')">
                <span>Terms & Conditions</span>
            </router-link>
        </div>
        <!--<span class="opacity-50 text-center">© Bruxemburg 2021</span>-->
    </div>

</template>