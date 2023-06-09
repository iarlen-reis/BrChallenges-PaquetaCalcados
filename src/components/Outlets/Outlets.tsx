/* eslint-disable import/no-absolute-path */
import OutletsImage from '/Images/Outlets.png'
import { Container } from '../../styles/Global'
import { OutletStyled, OutletLogo, UlStyled } from './styles'
import { Fade } from 'react-awesome-reveal'

const Outlets = () => {
  return (
    <Fade direction="up" triggerOnce={true} delay={200}>
      <Container>
        <OutletStyled id="outlets">
          <OutletLogo>
            <img src={OutletsImage} alt="Logo da paquetá outlet" />
            <p>
              Você também pode escolher o seu novo sapato favorito de acordo com
              a sua numeração.
            </p>
          </OutletLogo>
          <UlStyled>
            <li>33</li>
            <li>34</li>
            <li>35</li>
            <li>36</li>
            <li>37</li>
            <li>38</li>
            <li>39</li>
            <li>40</li>
            <li>41</li>
            <li>42</li>
            <li>43</li>
            <li>44</li>
          </UlStyled>
        </OutletStyled>
      </Container>
    </Fade>
  )
}

export default Outlets
