﻿using System.Collections.Generic;
using System.Linq;

namespace QuickBuy.Dominio.Entidades
{
    public abstract class Entidade
    {
        public List<string> _mensagensValidcao { get; set; }
        private List<string> mensagemValidacao
        {
            get { return _mensagensValidcao ?? (_mensagensValidcao = new List<string>()); }
        }

        protected void LimparMensagemValidacao()
        {
            mensagemValidacao.Clear();
        }

        protected void AdicionarCritica(string mensagem)
        {
            mensagemValidacao.Add(mensagem);
        }
        public abstract void Validate();
        protected bool EhValido
        {
            get { return !mensagemValidacao.Any(); }
        }

    }
}
