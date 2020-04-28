import React from 'react';

import {
  View,
  StyleSheet,
  Image,
} from 'react-native';

import { 
  Text,
  Grid,
  Col,
  Icon,
  Row,
  Card,
  CardItem,
  Left,
  Body,
  Button,
  Right,
} from 'native-base';

import HTML from 'react-native-render-html'

type Article_Attachment = {
    id: number,
    source_url: string,
}

type Article = {
    id: number,
    title: {
        rendered: string,
    },
    content: {
        rendered: string,
        protected: boolean,
    },
    link: string,
    _embedded: {
        'wp:featuredmedia': Article_Attachment[],
    },
}

type Props = {
    item: Article,
}

const Article = ({item}: Props) => {
    var img: string | object = "";

    const url = item._embedded['wp:featuredmedia'][0].source_url

    if ( url ) {
        img = {
            uri: url,
        }
    }

    console.log('content', item);

    return(
        <Card>
            <CardItem cardBody>
                <Image source={img} style={styles.image} />
            </CardItem>

            <CardItem cardBody>
              <Body>
                <HTML 
                    html={item.content.rendered} 
                    tagsStyles={{ 
                        p: {
                            fontSize: 16,
                            lineHeight: 21,
                        }
                    }}
                    containerStyle={{
                        padding: 15,
                    }} 
                />
              </Body>
            </CardItem>
        </Card>
    )
}

const styles = StyleSheet.create({
    generales_item: {
        fontFamily: "Helvetica",
        padding: 10,
        paddingTop: 12,
        fontSize: 17,
        fontWeight: "400",
    },
    image: {
        height: 200, 
        width: null, 
        flex: 1
    },
});

export default Article;