package com.exemplo.util;

public class ItemCombo {
            private int id;
        private String descricao;

        public ItemCombo(int id, String descricao) {
            this.id = id;
            this.descricao = descricao;
        }

        public int getId() { return id; }
        public String getDescricao() { return descricao; }

        // O JavaFX e o Swing usam o toString() para saber o que MOSTRAR na tela para o usuário
        @Override
        public String toString() {
            return descricao;
        }
}
