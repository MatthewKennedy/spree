object false
node(:error) { I18n.t('spree.api.invalid_resource') }
node(:errors) { @resource.errors.to_hash }
