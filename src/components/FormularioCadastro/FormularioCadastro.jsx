import React from "react";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuarios";
import DadosEntrega from "./DadosEntrega";
import { useState } from "react";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  const formularios = [<DadosUsuario aoEnviar={proximo} />,
  <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />,
  <DadosEntrega aoEnviar={aoEnviar} />
  ];

function proximo() {
  setEtapaAtual(etapaAtual + 1);
}

// function formularioAtual(etapa) {
//   switch (etapa) {
//     case 0:
//       return <DadosUsuario aoEnviar={proximo} />;
//     case 1:
//       return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
//     case 2:
//       return <DadosEntrega aoEnviar={aoEnviar} />;
//     default:
//       return <Typography>Erro ao selecionar formulario</Typography>
//   }
// }

return (
  <>
    {formularios[etapaAtual]}
  </>
);
}


export default FormularioCadastro;
