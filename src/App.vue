<template>
    <div id="app">
        <div
        class="d-flex  justify-content-between align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow"
        >
            <span class="d-flex align-items-center">
                <router-link class="text-dark" to="/">
                    <h5 class="my-0 mr-md-auto font-weight-normal">Leiloeiro</h5>
                </router-link>
            </span>
            <span>
                <router-link class="btn btn-outline-primary" to="/leilao">Novo leilão</router-link>
            </span>
        </div>
        <router-view />
    </div>
</template>
