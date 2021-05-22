import * as React from 'react';
import { ListView } from 'react-nativescript';
import { View, Text } from "@triniwiz/nativescript-yogalayout/react";

export interface Example {
    title: string,
    description?: string,
    render: () => JSX.Element,
};

export interface ExampleListProps {
    examples: Example[];
}

const cellFactory = ({ title, description, render }: Example) => {
    // return (<View style={styles.titleContainer}></View>);
    const descriptionComponent = description ? (<Text style={styles.descriptionText}>{description}</Text>) : null;

    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>{title}</Text>
                {descriptionComponent}
            </View>
            <View style={styles.children}>
                {render()}
            </View>
        </View>
    );
};

export function ExampleList({ examples }: ExampleListProps) {
    return (
        <ListView items={examples} cellFactory={cellFactory} />
    );
}

const styles = {
  container: {
    borderRadius: 3,
    borderWidth: 0.5,
    borderColor: "#d6d7da",
    backgroundColor: "#ffffff",
    overflow: 'hidden' as const,
    margin: 10,

    // FIXME: Cannot read property 'yoga' of undefined
    // marginVertical: 5,
  },
  titleContainer: {
    borderBottomWidth: 0.5,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 2.5,
    borderBottomColor: "#d6d7da",
    backgroundColor: "#f6f7f8",

    // FIXME: Cannot read property 'yoga' of undefined
    // paddingHorizontal: 10,

    // FIXME: Cannot read property 'yoga' of undefined
    // paddingVertical: 5,
  },
  titleText: {
    fontSize: 14,
    fontWeight: 500 as any, // FontWeight.medium. Typings conflict getting in the way of using number directly.
  },
  descriptionText: {
    fontSize: 14,
  },
  children: {
    margin: 10,
  },
};