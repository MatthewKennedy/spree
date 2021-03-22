require_dependency "spree/calculator"

module Spree
  class Calculator::FixedAmount < Calculator
    preference :amount, :decimal, default: 0
    preference :currency, :string, default: -> { Spree::Config[:currency] }

    def self.description
      Spree.t(:fixed_amount)
    end

    def compute(*args)
      object = args[0]
      actionable_line_items_total = args[1]
      ams = args[2]
      last_actionable_line_item_id = args[3]

      return 0 unless object && preferred_currency.casecmp(object.currency.upcase).zero?

      # For most of the line items.
      if object.id != last_actionable_line_item_id || last_actionable_line_item_id.nil?
        percentage_of_applicable = (object.amount / actionable_line_items_total)
        (preferred_amount * percentage_of_applicable).round(2)

      # Last item eats the outstanding discount.
      else
        discounts_used = []

        ams.each do |i|
          percentage_of_applicable = (i / actionable_line_items_total)
          discounts_used << (preferred_amount * percentage_of_applicable).round(2)
        end

        preferred_amount - discounts_used.inject(:+)
      end
    end
  end
end
