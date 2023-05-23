/* eslint-disable import/no-absolute-path */
import React from 'react'

import OutletsImage from '/Images/Outlets.png'
import { Container } from '../../styles/Global'

import { OutletStyled, OutletLogo, UlStyled } from './styles'

const Outlets = () => {
  return (
    <Container>
      <OutletStyled>
        <OutletLogo>
          <img src={OutletsImage} alt="Logo da paquetá outlet" />
          <p>
            Você também pode escolher o seu novo sapato favorito de acordo com a
            sua numeração.
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
  )
}

export default Outlets
