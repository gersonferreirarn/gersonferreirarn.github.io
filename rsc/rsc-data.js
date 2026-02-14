const RSC_DATA = {

RSC1: {
pesoTotal: 10,
maxTotal: 100,
diretrizes: [

{
codigo:"I",
nome:"I - Experiência na área de formação e/ou atuação do docente, anterior ao ingresso na Instituição, contemplando o impacto de suas ações nas demais diretrizes dispostas para todos os perfis do RSC",
peso:2,
maxDiretriz:20,
criterios:[
{item:1, descricao:"Gestão escolar (direção, assistente de direção, gerente)", fator:0.17, unidade:"Mês", max:60},
{item:2, descricao:"Gestão escolar (supervisão, coordenação, orientação educacional)", fator:0.08, unidade:"Mês", max:125},
{item:3, descricao:"Exercício de magistério (educação infantil, básica e superior)", fator:0.08, unidade:"Mês", max:125},
{item:4, descricao:"Gestão na iniciativa privada na área de atuação (presidência, superintendência, direção, gerência, chefia, supervisão e coordenação em empresas ou entidades)", fator:0.17, unidade:"Mês", max:60},
{item:5, descricao:"Experiência na área de atuação ou formação em nível técnico, administrativo, operacional, comercial ou profissional liberal", fator:0.08, unidade:"Mês", max:125},
{item:6, descricao:"Participação em colegiados ou conselhos de empresas, entidades ou instituições de ensino", fator:0.17, unidade:"Mês", max:60},
{item:7, descricao:"Atividade em organizações sociais e/ou assistenciais", fator:0.17, unidade:"Mês", max:60},
{item:8, descricao:"Atividades na função de instrutor em capacitação ou treinamento em empresas, instituições de ensino ou entidades", fator:0.08, unidade:"Mês", max:125},
{item:9, descricao:"Atuação como conferencista ou palestrante", fator:0.40, unidade:"Evento", max:25},
{item:10, descricao:"Participação em conferência, palestra, seminário, simpósio, colóquio, congresso ou eventos similares", fator:0.17, unidade:"Evento", max:60},
{item:11, descricao:"Avaliação de projeto, protótipo e/ou invenção", fator:1.00, unidade:"Evento", max:10},
{item:12, descricao:"Participação em comissão e/ou representação institucional, sindical e/ou profissional", fator:0.17, unidade:"Mês", max:60},
{item:13, descricao:"Produção de material didático e/ou implantação de ambiente de aprendizagem, nas atividades de ensino, pesquisa, extensão e/ou inovação ou artigo completo publicado em periódico científico ou apresentação artística em mostras ou similares, na área/subárea de atuação", fator:0.50, unidade:"Material", max:20},
{item:14, descricao:"Revisão técnica, tradução ou organização de material didático, paradidático em atividades de ensino, pesquisa, extensão e/ou inovação", fator:1.00, unidade:"Material", max:10},
{item:15, descricao:"Participação em processos seletivos, em bancas de avaliação acadêmica e/ou de concursos, grupos de trabalho, oficinas institucionais, visitas técnicas com alunos, projetos de interesse institucional de ensino, pesquisa, extensão e/ou inovação, projetos e/ou práticas pedagógicas de reconhecida relevância", fator:0.10, unidade:"Atividade concluída", max:100},
{item:16, descricao:"Participação no desenvolvimento de protótipos, depósito ou registros de propriedade intelectual", fator:5.00, unidade:"Atividade concluída", max:2},
{item:17, descricao:"Premiação por atividades científicas, artísticas, esportivas ou culturais", fator:5.00, unidade:"Prêmio", max:2},
{item:18, descricao:"Organização de eventos científicos, tecnológicos, esportivos, sociais, filantrópicos ou culturais", fator:2.00, unidade:"Evento", max:5}
]
},

{
codigo:"II",
nome:"II - Cursos de capacitação na área de interesse institucional",
peso:1,
maxDiretriz:10,
criterios:[
{item:19, descricao:"Participação em conferência, palestra, seminário, simpósio, colóquio, workshop, congresso ou similares, na área de atuação", fator:0.25, unidade:"Evento", max:40},
{item:20, descricao:"Conclusão de curso de aperfeiçoamento (carga horária mínima de 120 horas em certificação individual ou soma de até cinco certificações)", fator:10.00, unidade:"Curso concluído", max:1},
{item:21, descricao:"Conclusão de disciplina em pós-graduação", fator:2.00, unidade:"Disciplina", max:5}
]
},

{
codigo:"III",
nome:"III - Atuação nos diversos níveis e modalidades de educação",
peso:1,
maxDiretriz:10,
criterios:[
{item:22, descricao:"Exercício da docência em cursos de formação inicial e continuada (FIC)", fator:0.08, unidade:"Mês", max:125},
{item:23, descricao:"Exercício da docência em curso de formação de professores", fator:0.08, unidade:"Mês", max:125},
{item:24, descricao:"Exercício da docência em Proeja FIC", fator:0.08, unidade:"Mês", max:125},
{item:25, descricao:"Exercício da docência em curso técnico", fator:0.08, unidade:"Mês", max:125},
{item:26, descricao:"Exercício da docência em curso superior", fator:0.08, unidade:"Mês", max:125},
{item:27, descricao:"Exercício da docência em curso de pós-graduação lato sensu", fator:0.10, unidade:"Mês", max:100},
{item:28, descricao:"Exercício da docência em curso pós-graduação stricto sensu (mestrado)", fator:0.10, unidade:"Mês", max:100}
]
},

{
codigo:"IV",
nome:"IV - Atuação em comissões e representações institucionais, de classes e profissionais, contemplando o impacto de suas ações nas demais diretrizes dispostas para todos os níveis do RSC",
peso:1,
maxDiretriz:10,
criterios:[
{item:29, descricao:"Participação como titular em atividades regulares previstas em Lei, Estatuto ou Regimento (conselhos, colegiados, Comissão de Ética, CPPD, CPA ou em outras de interesse da Instituição)", fator:0.20, unidade:"Mês", max:50},
{item:30, descricao:"Participação como suplente em atividades regulares previstas em Lei, Estatuto ou Regimento (conselhos, colegiados, Comissão de Ética, CPPD, CPA ou em outras de interesse da Instituição)", fator:0.10, unidade:"Mês", max:100},
{item:31, descricao:"Participação como titular em conselhos de classe e/ou profissionais", fator:0.10, unidade:"Mês", max:100},
{item:32, descricao:"Participação como suplente em conselhos de classe e/ou profissionais", fator:0.05, unidade:"Mês", max:200},
{item:33, descricao:"Atuação como membro de gestão sindical (presidente, diretor e conselheiro)", fator:0.20, unidade:"Mês", max:50},
{item:34, descricao:"Atuação como membro de comissão de Processo Administrativo Disciplinar, Sindicância ou Processo Ético", fator:1.00, unidade:"Processo", max:10},
{item:35, descricao:"Desenvolvimento de trabalho no âmbito do MEC (cessão)", fator:0.20, unidade:"Mês", max:50},
{item:36, descricao:"Participação em comissão ou grupo de trabalho de caráter pedagógico e Núcleo Docente Estruturante – NDE", fator:0.20, unidade:"Mês", max:50}
]
},

{
codigo:"V",
nome:"V - Produção de material didático e/ou implantação de ambientes de aprendizagem, nas atividades de ensino, pesquisa, extensão e/ou inovação",
peso:1,
maxDiretriz:10,
criterios:[
{item:37, descricao:"Produção de livros didáticos ou manuais técnicos", fator:2.00, unidade:"Material", max:5},
{item:38, descricao:"Produção de apostilas, apresentações, roteiros técnicos, culturais e/ou esportivos e outros instrumentos didáticos", fator:0.25, unidade:"Material", max:40},
{item:39, descricao:"Implantação de projeto de ambientes de ensino-aprendizagem, laboratórios, oficinas, estúdios, sala ou áreas para práticas esportivas", fator:0.50, unidade:"Projeto implantado", max:20}
]
},

{
codigo:"VI",
nome:"VI - Atuação na gestão acadêmica e institucional, contemplando o impacto de suas ações nas demais diretrizes dispostas para todos os perfis do RSC",
peso:2,
maxDiretriz:20,
criterios:[
{item:40, descricao:"Exercício de Cargo de Direção 1", fator:0.50, unidade:"Mês", max:20},
{item:41, descricao:"Exercício de Cargo de Direção 2", fator:0.50, unidade:"Mês", max:20},
{item:42, descricao:"Exercício de Cargo de Direção 3", fator:0.40, unidade:"Mês", max:25},
{item:43, descricao:"Exercício de Cargo de Direção 4", fator:0.40, unidade:"Mês", max:25},
{item:44, descricao:"Exercício de função gratificada de coordenação de área, curso ou de atividades administrativas nomeadas pelo reitor ou diretor-geral de campus", fator:0.30, unidade:"Mês", max:34}
]
},

{
codigo:"VII",
nome:"VII - Participação em processos seletivos, em bancas de avaliação acadêmica e/ou de concursos",
peso:1,
maxDiretriz:10,
criterios:[
{item:45, descricao:"Participação em banca de concurso público, elaboração de prova de concurso público, correção de prova concurso público", fator:0.50, unidade:"Concurso", max:20},
{item:46, descricao:"Participação em banca de seleção de professor substituto/temporário", fator:0.25, unidade:"Banca", max:40},
{item:47, descricao:"Participação em bancas de avaliação do Programa de Reconhecimento e Certificação dos Saberes adquiridos pelos Trabalhadores Jovens ou Adultos - CERTIFIC e outros equivalentes", fator:0.50, unidade:"Prova", max:20},
{item:48, descricao:"Participação em bancas de TCC de curso técnico ou de graduação", fator:0.20, unidade:"Banca", max:50},
{item:49, descricao:"Participação em bancas de TCC ou monografia de curso de especialização", fator:0.25, unidade:"Banca", max:40}
]
},

{
codigo:"VIII",
nome:"VIII - Outras graduações na área de interesse, além daquela que o habilita e define o perfil do RSC pretendido, no âmbito do plano de qualificação institucional",
peso:1,
maxDiretriz:10,
criterios:[
{item:50, descricao:"Conclusão de curso adicional de graduação", fator:10.00, unidade:"Curso", max:1}
]
}

]

},

RSC2: {
pesoTotal: 10,
maxTotal: 100,
diretrizes: [

{
codigo:"I",
nome:"I - Orientação do corpo discente em atividade de ensino, extensão, pesquisa e/ou inovação",
peso:2,
maxDiretriz:20,
criterios:[
{item:1, descricao:"Orientação ou coorientação de TCC de curso técnico", fator:0.25, unidade:"Orientação concluída", max:40},
{item:2, descricao:"Orientação ou coorientação de TCC de curso de graduação", fator:0.40, unidade:"Orientação concluída", max:25},
{item:3, descricao:"Orientação ou coorientação de TCC ou monografia de especialização", fator:0.50, unidade:"Orientação concluída", max:20},
{item:4, descricao:"Orientação de bolsista de pesquisa", fator:0.40, unidade:"Orientação concluída", max:25},
{item:5, descricao:"Orientação de bolsista de extensão", fator:0.40, unidade:"Orientação concluída", max:25},
{item:6, descricao:"Orientação ou supervisão de estágio curricular, obrigatório ou não", fator:0.25, unidade:"Mês", max:40}
]
},

{
codigo:"II",
nome:"II - Participação no desenvolvimento de protótipos, depósitos e/ou registros de propriedade intelectual",
peso:1,
maxDiretriz:10,
criterios:[
{item:7, descricao:"Participação no desenvolvimento de produto ou de processo com patente ou registro de patente de propriedade intelectual", fator:10.00, unidade:"Patente ou registro", max:1},
{item:8, descricao:"Participação no desenvolvimento de produto ou de processo não patenteado ou não registrado", fator:2.00, unidade:"Desenvolvimento concluído", max:5}
]
},

{
codigo:"III",
nome:"III - Participação em grupos de trabalho e oficinas institucionais",
peso:2,
maxDiretriz:20,
criterios:[
{item:9, descricao:"Participação em núcleo de inovação tecnológica ou atividades correlatas", fator:0.20, unidade:"Mês", max:50}
]
},

{
codigo:"IV",
nome:"IV - Participação no desenvolvimento de projetos de interesse institucional de ensino, pesquisa, extensão e/ou inovação",
peso:1,
maxDiretriz:10,
criterios:[
{item:10, descricao:"Coordenação de projetos de pesquisa, extensão ou inovação tecnológica na Instituição", fator:5.00, unidade:"Projeto", max:2},
{item:11, descricao:"Participação em projetos de pesquisa, extensão ou inovação tecnológica na Instituição", fator:2.50, unidade:"Projeto", max:4}
]
},

{
codigo:"V",
nome:"V - Participação no desenvolvimento de projetos e/ou práticas pedagógicas de reconhecida relevância",
peso:2,
maxDiretriz:20,
criterios:[
{item:12, descricao:"Coordenação de Projetos Integradores", fator:2.50, unidade:"Projeto", max:4},
{item:13, descricao:"Participação em Projetos Integradores", fator:1.25, unidade:"Projeto", max:8},
{item:14, descricao:"Cursos ministrados na área de atuação", fator:2.00, unidade:"Curso", max:5},
{item:15, descricao:"Minicursos ministrados na área de atuação", fator:1.00, unidade:"Minicurso", max:10},
{item:16, descricao:"Palestras ministradas na área de atuação", fator:0.50, unidade:"Palestra", max:20}
]
},

{
codigo:"VI",
nome:"VI - Participação na organização de eventos científicos, tecnológicos, esportivos, sociais e/ou culturais",
peso:1,
maxDiretriz:10,
criterios:[
{item:17, descricao:"Participação na organização de congresso ou simpósio", fator:1.00, unidade:"Evento", max:10},
{item:18, descricao:"Participação na organização de workshop, seminário ou mostra, na área de atuação", fator:0.50, unidade:"Evento", max:20},
{item:19, descricao:"Participação na organização de eventos esportivos, sociais, culturais ou filantrópicos", fator:1.00, unidade:"Evento", max:10},
{item:20, descricao:"Participação na organização de palestra", fator:0.25, unidade:"Evento", max:40}
]
},

{
codigo:"VII",
nome:"VII - Outras pós-graduações lato sensu na área de interesse, além daquela que o habilita e define o perfil do RSC pretendido, no âmbito do plano de qualificação institucional",
peso:1,
maxDiretriz:10,
criterios:[
{item:21, descricao:"Conclusão de curso de aperfeiçoamento (mínimo de 180 horas)", fator:5.00, unidade:"Curso", max:2},
{item:22, descricao:"Conclusão de curso de especialização (mínimo de 360 horas)", fator:10.00, unidade:"Curso", max:1}
]
}

]

},

RSC3: {
pesoTotal: 10,
maxTotal: 100,
diretrizes: [

{
codigo:"I",
nome:"I - Desenvolvimento, produção e transferência de tecnologias",
peso:1,
maxDiretriz:10,
criterios:[
{item:1, descricao:"Participação em projeto que tenha resultado em contrato de transferência de tecnologia ou licenciamento", fator:10.00, unidade:"Contrato ou licenciamento", max:1}
]
},

{
codigo:"II",
nome:"II - Desenvolvimento de pesquisa e aplicação de métodos e tecnologias educacionais que proporcionem a interdisciplinaridade e a integração com a comunidade",
peso:1,
maxDiretriz:10,
criterios:[
{item:2, descricao:"Coordenação de implantação de Projeto Pedagógico de Curso (PPC)", fator:5.00, unidade:"PPC", max:2},
{item:3, descricao:"Participação em comissão de elaboração de PPC de curso de pós-graduação", fator:3.50, unidade:"PPC", max:3},
{item:4, descricao:"Participação em comissão de elaboração de PPC de curso de graduação", fator:3.50, unidade:"PPC", max:3},
{item:5, descricao:"Participação em comissão de elaboração de PPC de curso técnico", fator:3.50, unidade:"PPC", max:3},
{item:6, descricao:"Participação em comissão de elaboração de PPC de curso de formação inicial e continuada (FIC)", fator:1.00, unidade:"PPC", max:10},
{item:7, descricao:"Coordenação de reformulação de Projeto Pedagógico de Curso (PPC)", fator:3.50, unidade:"PPC", max:3},
{item:8, descricao:"Participação em comissão de reformulação de PPC de curso de pós-graduação", fator:2.00, unidade:"PPC", max:5},
{item:9, descricao:"Participação em comissão de reformulação de PPC de curso de graduação", fator:2.00, unidade:"PPC", max:5},
{item:10, descricao:"Participação em comissão de reformulação de PPC de curso técnico", fator:2.00, unidade:"PPC", max:5},
{item:11, descricao:"Participação em comissão de reformulação de PPC de curso de formação inicial e continuada (FIC)", fator:0.50, unidade:"PPC", max:20},
{item:12, descricao:"Produção de material didático inovador (software educacional, vídeo educativo, ambiente virtual de aprendizagem, entre outros)", fator:5.00, unidade:"Material", max:2}
]
},

{
codigo:"III",
nome:"III - Desenvolvimento de pesquisa e atividades de extensão que proporcionem a articulação institucional com os arranjos produtivos, sociais e culturais locais",
peso:2,
maxDiretriz:20,
criterios:[
{item:13, descricao:"Coordenação de projeto de pesquisa ou extensão com captação de recursos externos", fator:5.00, unidade:"Projeto", max:2},
{item:14, descricao:"Coordenação de Núcleo de Inovação Tecnológica (NIT)", fator:1.00, unidade:"Mês", max:10},
{item:15, descricao:"Coordenação de cursos de extensão", fator:0.50, unidade:"Mês", max:20}
]
},

{
codigo:"IV",
nome:"IV - Atuação em projetos e/ou atividades em parceria com outras instituições",
peso:1,
maxDiretriz:10,
criterios:[
{item:16, descricao:"Participação em projeto em parceria com outras instituições com captação de recursos", fator:5.00, unidade:"Projeto", max:2},
{item:17, descricao:"Coordenação de projeto em parceria com outras instituições", fator:5.00, unidade:"Projeto", max:2},
{item:18, descricao:"Implantação de Unidade de Ensino ou similar", fator:5.00, unidade:"Projeto", max:2},
{item:19, descricao:"Participação em projeto em parceria com outras instituições", fator:2.50, unidade:"Projeto", max:4},
{item:20, descricao:"Liderança de grupo de pesquisa com produtividade anual comprovada", fator:0.25, unidade:"Mês", max:40}
]
},

{
codigo:"V",
nome:"V - Atuação em atividades de assistência técnica nacional e/ou internacional",
peso:1,
maxDiretriz:10,
criterios:[
{item:21, descricao:"Realização de trabalhos técnicos ou consultorias internacionais", fator:5.00, unidade:"Atividade concluída", max:2},
{item:22, descricao:"Realização de trabalhos técnicos ou consultorias nacionais", fator:2.00, unidade:"Atividade concluída", max:5},
{item:23, descricao:"Realização de trabalhos técnicos ou consultorias locais", fator:0.50, unidade:"Atividade concluída", max:20},
{item:24, descricao:"Consultoria a órgão internacional especializado", fator:5.00, unidade:"Consultoria", max:2},
{item:25, descricao:"Consultoria a órgão nacional especializado", fator:2.00, unidade:"Consultoria", max:5}
]
},

{
codigo:"VI",
nome:"VI - Produção acadêmica e/ou tecnológica",
peso:3,
maxDiretriz:30,
criterios:[
{item:26, descricao:"Premiação nacional ou internacional por produção científica, tecnológica, artística ou cultural", fator:5.00, unidade:"Prêmio", max:2},
{item:27, descricao:"Publicação de livro especializado", fator:5.00, unidade:"Livro", max:2},
{item:28, descricao:"Publicação de capítulo de livro especializado ou organização de livro", fator:2.50, unidade:"Livro", max:4},
{item:29, descricao:"Tradução de livro especializado", fator:2.50, unidade:"Livro", max:4},
{item:30, descricao:"Revisão técnica de livro especializado", fator:2.50, unidade:"Livro", max:4},
{item:31, descricao:"Publicação de artigo em revista Qualis A ou B", fator:5.00, unidade:"Artigo", max:2},
{item:32, descricao:"Publicação de artigo em revista Qualis C ou não indexada", fator:2.00, unidade:"Artigo", max:5},
{item:33, descricao:"Relatório de pesquisa institucional", fator:2.50, unidade:"Relatório", max:4},
{item:34, descricao:"Publicação de trabalho completo em evento internacional", fator:5.00, unidade:"Trabalho", max:2},
{item:35, descricao:"Publicação de trabalho completo em evento nacional", fator:1.00, unidade:"Trabalho", max:10},
{item:36, descricao:"Projeto de extensão aprovado em edital externo", fator:5.00, unidade:"Projeto", max:2},
{item:37, descricao:"Coordenação de ações de extensão", fator:0.50, unidade:"Evento", max:20},
{item:38, descricao:"Participação em projeto de extensão", fator:1.00, unidade:"Participação", max:10},
{item:39, descricao:"Docência em unidade curricular de curso de extensão", fator:1.00, unidade:"Disciplina", max:10},
{item:40, descricao:"Editor de periódico científico nacional ou internacional", fator:2.00, unidade:"Semestre", max:5},
{item:41, descricao:"Revisor de artigo científico em periódico nacional ou internacional", fator:1.00, unidade:"Artigo", max:10},
{item:42, descricao:"Revisor de trabalhos em eventos científicos (com ISSN)", fator:0.50, unidade:"Trabalho", max:20},
{item:43, descricao:"Orientação de TCC de curso técnico", fator:0.10, unidade:"Orientação concluída", max:100},
{item:44, descricao:"Orientação de TCC de curso de graduação", fator:0.20, unidade:"Orientação concluída", max:50},
{item:45, descricao:"Orientação de TCC ou monografia de curso de especialização", fator:0.25, unidade:"Orientação concluída", max:40}
]
},

{
codigo:"VII",
nome:"VII - Outras pós-graduações stricto sensu na área de interesse, além daquela que o habilita e define o perfil do RSC pretendido, no âmbito do plano de qualificação institucional",
peso:1,
maxDiretriz:10,
criterios:[
{item:46, descricao:"Conclusão de curso stricto sensu", fator:10.00, unidade:"Curso", max:1}
]
}

]

}


};
