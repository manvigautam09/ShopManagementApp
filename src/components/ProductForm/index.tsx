import React, {Dispatch, SetStateAction} from 'react';
import {StyleSheet, Text, View, Switch} from 'react-native';

import Button from '../shared/Button';
import CustomTextInput from '../shared/CustomTextInput';
import {Products} from '../../store/reducers/shopReducer/type';

interface ProductFormProps {
  product: Products;
  setProduct: Dispatch<SetStateAction<Products>>;
  onSubmit: (shopId: string) => Promise<void>;
  shopId: string;
  mode: 'CREATE' | 'EDIT';
}

const ProductForm = (props: ProductFormProps) => {
  const {product, shopId, mode, setProduct, onSubmit} = props;

  return (
    <React.Fragment>
      <View style={styles.inputView}>
        <Text>Product Name</Text>
        <CustomTextInput
          placeholder={'name'}
          value={product.prName}
          onChangeText={pName => setProduct({...product, prName: pName})}
        />
      </View>
      <View style={styles.inputView}>
        <Text>Product Bio</Text>
        <CustomTextInput
          placeholder={'description'}
          value={product.prDescription}
          onChangeText={pDescription =>
            setProduct({...product, prDescription: pDescription})
          }
          multiline={true}
        />
      </View>
      <View style={styles.inputView}>
        <Text>Product Tags</Text>
        <CustomTextInput
          placeholder={'tags'}
          value={product.prTags}
          onChangeText={pTags => setProduct({...product, prTags: pTags})}
        />
      </View>
      <View style={styles.inputView}>
        <Text>Product Price</Text>
        <CustomTextInput
          placeholder={'price'}
          value={product.prPrice}
          onChangeText={pPrice => setProduct({...product, prPrice: pPrice})}
          keyboardType="numeric"
        />
      </View>
      <View style={styles.inputView}>
        <Text>Product Availability</Text>
        <Switch
          trackColor={{false: '#767577', true: '#81b0ff'}}
          thumbColor={product.prAvailability ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() =>
            setProduct({...product, prAvailability: !product.prAvailability})
          }
          value={product.prAvailability}
        />
      </View>
      {false ? (
        <Text>LOADING ...</Text>
      ) : (
        <View style={styles.alignAddProductButton}>
          <Button
            title={`${mode === 'CREATE' ? 'Add' : 'Edit'} Product`}
            disabled={
              Number(product.prPrice) === 0 ||
              product.prName.length === 0 ||
              product.prDescription.length === 0
            }
            onPress={() => onSubmit(shopId)}
          />
        </View>
      )}
    </React.Fragment>
  );
};
export default ProductForm;

const styles = StyleSheet.create({
  inputView: {
    display: 'flex',
    width: '100%',
    height: 50,
    paddingTop: 10,
    marginTop: 20,
  },
  alignAddProductButton: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
  },
});
