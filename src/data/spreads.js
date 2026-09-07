import { asset } from '../utils/asset'

const spreads = [
  {
    id: 1,
    image: asset('images/spread-01.webp'),
    alt: {
      en: 'Indoors, a fawn pug rests his front paws on the back of a sofa and watches a silver estate car pull away down a suburban street.',
      pt: 'Dentro de casa, um pug bege apoia as patas da frente nas costas do sofá e olha pela janela para um carro prateado que se afasta por uma rua suburbana.',
    },
    en: [
      'Every morning, Bruce watched from the window.',
      'He was a good boy. Patient. Loyal.',
      'He always said goodbye.',
    ],
    pt: [
      'Todas as manhãs, Bruce observava pela janela.',
      'Era um bom rapaz. Paciente. Leal.',
      'Dizia sempre adeus.',
    ],
  },
  {
    id: 2,
    image: asset('images/spread-02.webp'),
    alt: {
      en: 'The pug sits squarely on a wooden floor, facing the reader with a flat, unimpressed expression.',
      pt: 'O pug está sentado, direito, num chão de madeira, virado para o leitor com uma expressão impassível.',
    },
    en: [
      'He had been given a treat.',
      'It was fine.',
      'It was not enough.',
    ],
    pt: [
      'Tinham-lhe dado um petisco.',
      'Servia.',
      'Não era suficiente.',
    ],
  },
  {
    id: 3,
    image: asset('images/spread-03.webp'),
    alt: {
      en: 'Two scenes: on the left the pug sits with his back to us in front of a closed front door, and on the right he stands in the hallway and looks up at a brass magnifying glass hanging from a coat hook.',
      pt: 'Duas cenas: à esquerda o pug está sentado de costas em frente a uma porta fechada, e à direita está de pé no corredor e olha para uma lupa de latão pendurada num cabide.',
    },
    en: [
      'The door closed.',
      'Bruce waited.',
      'Then Bruce stood up.',
      'He had work to do.',
    ],
    pt: [
      'A porta fechou-se.',
      'Bruce esperou.',
      'Depois Bruce levantou-se.',
      'Tinha trabalho a fazer.',
    ],
  },
  {
    id: 4,
    image: asset('images/spread-04.webp'),
    alt: {
      en: 'Close up of the pug with his nose lowered to a tiled kitchen floor, inspecting a single dark speck.',
      pt: 'Grande plano do pug com o focinho junto ao chão de azulejo da cozinha, a inspecionar um pequeno ponto escuro.',
    },
    en: [
      'First: the kitchen floor.',
      'Standard procedure.',
      'Nothing escapes the kitchen floor.',
      'This time, nothing was there either.',
    ],
    pt: [
      'Primeiro: o chão da cozinha.',
      'Procedimento padrão.',
      'Nada escapa ao chão da cozinha.',
      'Desta vez, também não havia nada.',
    ],
  },
  {
    id: 5,
    image: asset('images/spread-05.webp'),
    alt: {
      en: 'Seen from behind, the pug\'s back end and curled tail stick out from between two sofa cushions, with one crumb lit up on the seat below.',
      pt: 'Visto de trás, a traseira e o rabo enrolado do pug saem de entre duas almofadas do sofá, com uma migalha iluminada no assento.',
    },
    en: [
      'Then: the sofa cushions.',
      'A crumb.',
      'Bruce noted this.',
      'The trail was warm.',
    ],
    pt: [
      'Depois: as almofadas do sofá.',
      'Uma migalha.',
      'Bruce tomou nota.',
      'O rasto estava quente.',
    ],
  },
  {
    id: 6,
    image: asset('images/spread-06.webp'),
    alt: {
      en: 'The pug peers around the open door of a dark cupboard under the sink, one paw on the frame, a bottle and a metal bucket either side of him.',
      pt: 'O pug espreita pela porta aberta de um armário escuro debaixo do lava-loiça, com uma pata na moldura e uma garrafa e um balde de metal de cada lado.',
    },
    en: [
      'The cupboard under the sink.',
      'Suspicious.',
      'Always suspicious.',
      'It was not there. But it was definitely suspicious.',
    ],
    pt: [
      'O armário debaixo do lava-loiça.',
      'Suspeito.',
      'Sempre suspeito.',
      'Não estava lá. Mas continuava a ser suspeito',
    ],
  },
  {
    id: 7,
    image: asset('images/spread-07.webp'),
    alt: {
      en: 'The pug stands in a living room beside a toppled terracotta plant pot, eyes wide, looking straight ahead.',
      pt: 'O pug está de pé na sala ao lado de um vaso de barro tombado, com os olhos muito abertos e virado para a frente.',
    },
    en: [
      'Something fell.',
      'Bruce looked at it.',
      'Bruce looked around.',
      'Bruce continued.',
    ],
    pt: [
      'Algo caiu.',
      'Bruce olhou.',
      'Bruce olhou à volta.',
      'Bruce continuou.',
    ],
  },
  {
    id: 8,
    image: asset('images/spread-08.webp'),
    alt: {
      en: 'The same living room and the same fallen pot, except the pug has taken a step away and glanced off to one side.',
      pt: 'A mesma sala e o mesmo vaso caído, mas o pug já deu um passo em frente e olha de lado.',
    },
    en: [
      'Then.',
      'A scent.',
      'Bruce stopped.',
      'He knew that smell.',
    ],
    pt: [
      'Então.',
      'Um cheiro.',
      'Bruce parou.',
      'Conhecia aquele cheiro.',
    ],
  },
  {
    id: 9,
    image: asset('images/spread-09.webp'),
    alt: {
      en: 'Up on the kitchen counter, the pug reaches a paw to a high shelf and tips down a paper bag labelled Crunchy Treats.',
      pt: 'Em cima da bancada da cozinha, o pug estica uma pata até uma prateleira alta e inclina um saco de papel com a etiqueta Crunchy Treats.',
    },
    en: [
      'The high shelf.',
      'Of course.',
      'They always thought the high shelf was enough.',
      'They did not know Bruce.',
    ],
    pt: [
      'A prateleira alta.',
      'Claro.',
      'Achavam sempre que a prateleira alta bastava.',
      'Não conheciam o Bruce.',
    ],
  },
  {
    id: 10,
    image: asset('images/spread-10.webp'),
    alt: {
      en: 'The pug sits among biscuits scattered across the kitchen floor beside the emptied treat bag, one biscuit balanced on his muzzle and two chairs knocked over behind him.',
      pt: 'O pug está sentado no meio de biscoitos espalhados pelo chão da cozinha, ao lado do saco de petiscos vazio, com um biscoito equilibrado no focinho e duas cadeiras tombadas atrás.',
    },
    en: [
      'The evidence was reviewed.',
      'Thoroughly.',
      'Very thoroughly.',
      'Bruce was nothing if not thorough.',
    ],
    pt: [
      'As provas foram revistas.',
      'Minuciosamente.',
      'Muito minuciosamente.',
      'Bruce era, acima de tudo, minucioso.',
    ],
  },
  {
    id: 11,
    image: asset('images/spread-11.webp'),
    alt: {
      en: 'Close up of the pug\'s face, ears lifted and eyes wide for the first time in the book, the treat bag blurred behind him.',
      pt: 'Grande plano da cara do pug, com as orelhas levantadas e os olhos muito abertos pela primeira vez no livro, e o saco de petiscos desfocado atrás.',
    },
    en: [
      'Then Bruce heard it.',
      'An engine.',
      'The car.',
      'Oh no.',
    ],
    pt: [
      'Foi então que Bruce ouviu.',
      'Um motor.',
      'O carro.',
      'Oh não.',
    ],
  },
  {
    id: 12,
    image: asset('images/spread-12.webp'),
    alt: {
      en: 'The pug runs flat out along a hallway, legs stretched front and back, the whole room streaked with motion blur.',
      pt: 'O pug corre a toda a velocidade pelo corredor, com as patas esticadas à frente e atrás, e a sala toda desfocada pelo movimento.',
    },
    en: [
      'Bruce ran.',
      'Bruce had never run so fast.',
      'Physics, Bruce felt, were suggestions.',
    ],
    pt: [
      'Bruce correu.',
      'Bruce nunca tinha corrido tão depressa.',
      'As leis da física, pensou Bruce, eram apenas sugestões.',
    ],
  },
  {
    id: 13,
    image: asset('images/spread-13.webp'),
    alt: {
      en: 'The pug lies curled on the sofa with his eyes half closed, a pair of shoes just visible by the front door behind him.',
      pt: 'O pug está enrolado no sofá com os olhos meio fechados, e um par de sapatos aparece junto à porta de entrada atrás dele.',
    },
    en: [
      'The humans came home.',
      'Bruce was on the sofa.',
      'Bruce had always been on the sofa.',
      'Bruce was asleep. Obviously.',
      'He was a very good boy.',
    ],
    pt: [
      'Os humanos chegaram a casa.',
      'Bruce estava no sofá.',
      'Bruce tinha sempre estado no sofá.',
      'Bruce estava a dormir. Obviamente.',
      'Era mesmo um bom rapaz.',
    ],
  },
]

export default spreads