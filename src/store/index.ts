import { defineStore } from 'pinia'

export const useStore = defineStore('main', {
    state: () => {
        return {
            orderAddressId: 0
        }
    },
    actions: {
        updateOrderAddressId(id: number) {
            this.orderAddressId = id
        },
    }
})

