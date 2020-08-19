import React from 'react';

import {useModal} from '../../context/modal';
import {
  Container,
  Button
} from './styles';

function PaginaPrincipal() {
  const {addModal} = useModal();

  const data = { 
    type: 'success', 
    title: 'Modal', 
    description: 'Descrição do modal...'
  }

  return (
    <Container>
      <Button onClick={() => addModal(data)}>Abrir modal</Button>
      <h1>Lorem Ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
         Nunc congue ligula nec nibh aliquet, in dapibus odio egestas. Suspendisse non sollicitudin arcu.
        Proin eleifend sit amet dolor eu congue.
        Cras cursus elit dictum, tristique nunc volutpat, porta nisi.
        Aenean pulvinar, metus eu semper vestibulum, augue ex mollis tortor, a pharetra lacus velit at eros.
        Phasellus faucibus eros at lobortis efficitur.
        Suspendisse quis bibendum eros, at dictum dui.
        Pellentesque lacinia eros ac nisl accumsan congue.
        In non elementum leo, non ultrices urna.
        Morbi tincidunt consequat faucibus.
      </p>
      <p>Sed eu mauris lacus.
        Nulla odio purus, sodales eget massa vel, pellentesque cursus ligula.
        Nulla tincidunt lorem vitae quam fringilla convallis.
        Curabitur ultricies vel orci aliquet convallis.
        Donec tristique orci in facilisis rutrum.
        Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
        Cras pulvinar tristique erat, eget sagittis odio feugiat non.
        Integer risus velit, imperdiet eget consequat in, molestie at nibh.
        Aliquam ac cursus tortor.
        Sed lacinia arcu et scelerisque molestie.
        Maecenas in mi fermentum, aliquam massa quis, facilisis neque.
        Nullam tincidunt tortor scelerisque lorem imperdiet lacinia.
        Morbi porttitor suscipit enim ac luctus.
      </p>
      <p>Mauris viverra nisl et nunc rhoncus, sit amet pellentesque velit finibus.
        Aenean fringilla sollicitudin neque.
        Fusce laoreet ex vitae turpis tempus, quis dictum ligula vehicula.
        Fusce urna ex, pretium ut urna vel, imperdiet ultrices velit.
        Maecenas in ornare diam.
        Donec imperdiet sapien fermentum nisi gravida facilisis.
        Cras condimentum urna et sem hendrerit euismod.
        Vivamus pharetra aliquet ipsum a dignissim.
        Nunc ultricies tellus eu justo lacinia iaculis.
      </p>
      <p>Mauris ut est augue.
        Cras consectetur porta orci at fringilla.
        Curabitur at justo pellentesque, fermentum nisl eget, faucibus ante.
        Nullam posuere tellus sollicitudin malesuada varius.
        Duis ornare mauris eget velit varius porta.
        In sed urna eget sem facilisis lacinia.
        Nunc in luctus tellus, ac condimentum libero.
        Morbi ac tellus rhoncus, facilisis tortor nec, euismod arcu.
      </p>
      <p>Sed cursus purus sit amet tellus hendrerit, non aliquam enim porttitor.
        Cras nec mauris id ex pharetra pellentesque eget eget nulla.
        Suspendisse vulputate dui vitae ligula maximus, et commodo est eleifend.
        Nam nisi nunc, fermentum eu est nec, scelerisque accumsan lorem.
        Donec scelerisque euismod elit, id venenatis turpis imperdiet quis.
        Morbi aliquam risus et lorem tempor varius.
        Nullam fringilla tempus nisi in egestas.
        In auctor bibendum enim, quis aliquet metus ornare rutrum.
        Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Ut condimentum, ante ut congue efficitur, est ligula cursus risus, at maximus tortor diam ac turpis.
        Phasellus vel diam venenatis, rutrum mi vel, pellentesque mi.
        Vivamus at ante vitae eros aliquam molestie in quis odio.
        Mauris eu lacus eu dolor porta cursus non eu eros.
        Fusce feugiat augue non molestie scelerisque.
      </p>
    </Container>
  )
}

export default PaginaPrincipal;