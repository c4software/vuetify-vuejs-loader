<template>
    <v-dialog value="true" persistent max-width="290">
        <v-card>
            <v-card-text class="text-center" style="padding: 20px">
                <v-progress-circular :size="70" indeterminate class="primary--text"/>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
  export default {
    name: 'VuetifyLoader'
  }
</script>
