/* eslint-disable import/no-absolute-path */
import React, { useEffect } from 'react'

import GuildeShoeImage from '/Images/GuildeShoes.png'

import {
  GuildeShoeStyled,
  GuildeContainer,
  DescriptionStyled,
  SizeShoeStyled,
  CloseButton,
} from './styles'

import { AiOutlineClose } from 'react-icons/ai'

interface IGuildeShoes {
  isOpen: boolean
  setIsOpen: (open: boolean) => void
}

const GuildeShoes = ({ isOpen, setIsOpen }: IGuildeShoes) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [isOpen])
  return (
    <GuildeShoeStyled isOpen={isOpen}>
      <GuildeContainer>
        <DescriptionStyled>
          <h1>GUIA DE TAMANHOS</h1>
          <div>
            <p>
              <span>1</span> Fique de pé em cima de uma folha de papel.
            </p>
            <p>
              <span>2</span> Faça um risco no seu calcanhar e outro na frente do
              seu dedão.
            </p>
            <p>
              <span>3</span> Agora é só medir o comprimento entre essas duas
              linhas e pronto!
            </p>
          </div>
          <img src={GuildeShoeImage} alt="" />
        </DescriptionStyled>
        <SizeShoeStyled>
          <div>
            <h2>NÚMERO DO CALÇADO</h2>
            <h2>COMPRIMENTO DO PÉ</h2>
          </div>
          <ul>
            <li>
              <span>33</span>
              <span>21,6 - 22,2 cm</span>
            </li>
            <li>
              <span>34</span>
              <span>22,3 - 22,9 cm</span>
            </li>
            <li>
              <span>35</span>
              <span>23,0 - 23,6 cm</span>
            </li>
            <li>
              <span>36</span>
              <span>23,7 - 24,2 cm</span>
            </li>
            <li>
              <span>37</span>
              <span>24,3 - 24,8 cm</span>
            </li>
            <li>
              <span>38</span>
              <span>24,9 - 25,5 cm</span>
            </li>
            <li>
              <span>39</span>
              <span>25,6 - 26,2 cm</span>
            </li>
            <li>
              <span>40</span>
              <span>26,3 - 26,8 cm</span>
            </li>
            <li>
              <span>41</span>
              <span>26,9 - 27,5 cm</span>
            </li>
            <li>
              <span>42</span>
              <span>27,6 - 28,2 cm</span>
            </li>
            <li>
              <span>43</span>
              <span>28,3 - 28,7 cm</span>
            </li>
            <li>
              <span>44</span>
              <span>28,8 - 29,4 cm</span>
            </li>
          </ul>
        </SizeShoeStyled>
        <CloseButton onClick={() => setIsOpen(!isOpen)}>
          <AiOutlineClose />
        </CloseButton>
      </GuildeContainer>
    </GuildeShoeStyled>
  )
}

export default GuildeShoes
