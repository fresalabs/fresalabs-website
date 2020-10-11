import React from 'react';
import { map, filter, isNil } from 'ramda';
import styled from 'styled-components';
import { Card } from 'antd';
import StarIcon from '@material-ui/icons/Star';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography } from '@material-ui/core';
import ProductsHuntIcon from './producthunt.png';
import NpmIcon from './npm.png';
import ClipBoardX from '../icons/ClipboardXIcon';
import CSSSpiderIcon from '../icons/CSSSpider';

const { Meta } = Card;

const Header = styled(Typography)`
  text-align: center;
  &.MuiTypography-root {
    margin: 60px 0;
  }
`;

const ProductsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  .ant-card {
    display: flex;
    justify-content: space-between;
    flex-direction: column;
    margin: 8px;
  }
`;

interface Product {
  name: string;
  description: string;
  siteLink: string;
  githubLink?: string;
  productsHuntLink?: string;
  npmLink?: string;
  icon: React.ReactNode;
}

const products: Product[] = [
  {
    name: 'Sleek Form',
    githubLink: 'https://github.com/fresalabs/sleekform',
    siteLink: 'https://sleekform.fresalabs.com',
    npmLink: 'https://www.npmjs.com/package/@fresalabs/sleekform',
    productsHuntLink:
      'https://www.producthunt.com/posts/sleekform?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-sleekform',
    description: 'Typeform components built with React, Sleek-Form offers complete control over all the components of Typeform',
    icon: <StarIcon />

  },
  {
    name: 'ClipboardX',
    siteLink: 'https://clipboardx.fresalabs.com/home',
    githubLink: 'https://github.com/fresalabs',
    description: 'A light Apple app that lives on your menu bar maintains the history of you copied text',
    icon: <ClipBoardX />
  },
  {
    name: 'CSS Spider',
    siteLink: 'https://cssspider.fresalabs.com/home',
    githubLink: 'https://github.com/fresalabs',
    description: 'The fastest and easiest way to check, copy and edit CSS.',
    icon: <CSSSpiderIcon />
  },
];

class Products extends React.Component {

  render() {
    return (
      <div>
        <Header variant="h3">Products</Header>
        <ProductsContainer>
          {map(
            (product: Product) => (
              <Card
                style={{ width: 300 }}
                actions={
                  filter(action => !isNil(action),[
                    product.githubLink && (<a key="github" href={product.githubLink}>
                      <GitHubIcon />
                    </a>),
                    product.productsHuntLink && (
                      <a key="npm" href={product.productsHuntLink}>
                        <img
                          src={ProductsHuntIcon}
                          alt="Sleekform - Fully customizable Typeform components | Product Hunt"
                          style={{ width: 25, height: 25 }}
                        />
                      </a>
                    ),
                    product.npmLink && (
                      <a key="npm" href={product.npmLink}>
                        <img
                          style={{ width: 20, height: 20 }}
                          src={NpmIcon}
                          alt="Sleekform - Fully customizable Typeform components | NPM"
                        />
                      </a>
                    ),
                ])}
              >
                <a href={product.siteLink}>
                  <Meta avatar={product.icon} title={product.name} description={product.description} />
                </a>
              </Card>
            ),
            products
          )}
        </ProductsContainer>
      </div>
    );
  }
}

export default Products;
