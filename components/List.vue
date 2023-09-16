<template>
    <v-expansion-panels tile>
            <v-expansion-panel
             key="1"
            >
                <v-expansion-panel-header class="text-sm-h3 text-h4">
                    Instagram
                </v-expansion-panel-header>
                <v-expansion-panel-content >
                    <Instagram/>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel
             key="2"
            >
                <v-expansion-panel-header class="text-sm-h3 text-h4">
                    Map
                </v-expansion-panel-header>
                <v-expansion-panel-content >
                    <GoogleMap/>
                </v-expansion-panel-content>
            </v-expansion-panel>
            <v-expansion-panel
             key="3"
            >
                <v-expansion-panel-header class="text-sm-h3 text-h4">
                    Contact us
                </v-expansion-panel-header>
                <v-expansion-panel-content >
                    <Contact/>
                </v-expansion-panel-content>
            </v-expansion-panel>
        </v-expansion-panels>
</template>